export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const UPDATE_QUESTION = "UPDATE_QUESTION"

export function receiveQuestions(question){
    return {
        type: RECEIVE_QUESTIONS,
        question
    }
}

export function updateQuestion(question){
    return {
        type: UPDATE_QUESTION,
        question
    }
}