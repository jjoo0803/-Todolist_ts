// action type 정의
const ADD_TODO = 'todos/ADD_TODO' as const
const DELETE_TODO = 'todos/DELETE_TODO' as const
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const

// action 정의
export const addTodo = (text: String) => ({
    type: ADD_TODO,
    payload: {
        id: Date.now().toString(36) + Math.random().toString(36).substring(2),
        text
    }
})

export const deleteTodo = (id: String) => ({
    type: DELETE_TODO,
    payload: id
})

export const toggleTodo = (id: String) => ({
    type: TOGGLE_TODO,
    payload: id
})

// 모든 액션 객체들에 대한 타입 준비
// ReturnType<typeof ___> 는 특정 함수의 반환 값을 추론해준다
// 상단부에서 액션타입을 선언할때 as const 를 하지 않으면 이 부분이 제대로 작동하지 않음
type TodosAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof deleteTodo>
    | ReturnType<typeof toggleTodo>

// 상태에서 사용할 할 일 항목 데이터 타입 정의
export type Todo = {
    id: string,
    text: string
    done: boolean
}

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type TodosState = Todo[]

// 초기 상태 선언
const initialState: TodosState = []

// 리듀서
// 리듀서에서는 state와 함수의 반환값이 일치하도록 작성
// 액션에서는 위에서 만든 TodosAction을 타입으로 설정한다
function todos (
    state: TodosState = initialState,
    action: TodosAction
): TodosState {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: '',
                text: '',
                done: false
            })
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
        default:
            return state
    }
}

export default todos