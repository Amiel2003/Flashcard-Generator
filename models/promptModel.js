const { db } = require('../firebase/firebase');
const collection = db.ref('prompts');

exports.getAll = async () => {
    const snapshot = await collection.once('value');
    const data = snapshot.val()
    return data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []
};

exports.create = async (data) => {
    const flashcard = collection.push();
    await flashcard.set(data)

    const snapshot = await flashcard.once('value')
    return { id: flashcard.key, ...snapshot.val() };
};
