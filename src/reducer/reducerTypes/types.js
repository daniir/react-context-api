//Data inicial
export const initialData = {
    users:
    [
        {
            id: Date.now(),
            name: 'usr1',
            age: 20
        }
    ]
};

//Definicion de los "types"
export const NEW_USER = "NEW_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";