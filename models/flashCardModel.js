const { db } = require('../firebase/firebase');
const collection = db.ref('flashcards');
const promptRef = db.ref('prompts')

exports.getAll = async () => {
    const snapshot = await collection.once('value');
    const data = snapshot.val()
    return data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []
};

exports.getByPrompt = async (promptId) => {
    try {
        const snapshot = await collection.orderByChild('prompt_id').equalTo(promptId).once('value')
        const data = snapshot.val()
        return data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []
    } catch (error) {
        console.error("Error getting flashcards by prompt: ", error)
        throw error
    }
}

exports.getByUser = async (userId) => {
    try {
        const snapshot = await collection.orderByChild('user_uid').equalTo(userId).once('value');
        const flashcardsData = snapshot.val();

        if (!flashcardsData) return [];

        // Group flashcards by prompt_id
        const grouped = {};

        for (const [id, card] of Object.entries(flashcardsData)) {
            const pid = card.prompt_id;

            if (!grouped[pid]) {
                grouped[pid] = {
                    prompt_id: pid,
                    prompt: null,
                    flashcards: [],
                };
            }

            grouped[pid].flashcards.push({ id, ...card });
        }

        // Fetch prompts and attach them to each group
        const result = await Promise.all(
            Object.values(grouped).map(async (group) => {
                const promptSnap = await promptRef.child(group.prompt_id).once('value');
                group.prompt = promptSnap.val() || null;
                return group;
            })
        );

        return result;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
};

exports.create = async (data) => {
    const flashcard = collection.push();
    await flashcard.set(data)

    const snapshot = await flashcard.once('value')
    return { id: flashcard.key, ...snapshot.val() };
};
