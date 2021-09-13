import { orderData } from "../actions"

const initialState = {
    loginStatus: localStorage.getItem('loginStatus') === 'true' ? true : false,
    adminLogin: localStorage.getItem('adminLogin') === 'true' ? true : false,
    salesLogin: localStorage.getItem('salesLogin') === 'true' ? true : false,
    inventoryList:JSON.parse(localStorage.getItem('inventoryList')) || [],
    teamList: JSON.parse(localStorage.getItem('teamList')) || [],
    allOrders: JSON.parse(localStorage.getItem('allOrders')) || [],
    cartItem: JSON.parse(localStorage.getItem('cartItem')) || [],
    userIdForUpdate: localStorage.getItem('userIdForUpdate'),
    medicineIdForUpdate: localStorage.getItem('medicineIdForUpdate'),
    product:[],
    orderData:[],
    employeData:[]
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "S_D_D":
            return { ...state,inventoryList:payload }
        case 'SEARCH_DATA':
            return { ...state, product:payload }
            case 'ORDER_DATA':
                return { ...state, orderData:payload }
                case 'EMPLOYE_DATA':
                    return { ...state, employeData:payload }
        case 'ADMIN_LOGIN':
            return { ...state, loginStatus: true, adminLogin: true, }
        case 'ADMIN_LOGOUT':
            return { ...state, loginStatus: false, adminLogin: false }
        case 'SALES_LOGIN':
            return { ...state, loginStatus: true, salesLogin: true }
        case 'SALES_LOGOUT':
            return { ...state, loginStatus: false, salesLogin: false }
        case 'ADD_MEDICINE':
            return { ...state, inventoryList: [...state.inventoryList, payload] }
        case 'ADD_SALES_EXECUTIVE':
            return { ...state, teamList: [...state.teamList, payload] }
        case 'CREATE_ORDER':
            return { ...state, allOrders: [...state.allOrders, payload] }
        case 'ADD_TO_CART':
            return { ...state, cartItem: [...state.cartItem, payload] }
        case 'EMPTY_CART':
            return { ...state, cartItem: [] }
        case 'UPDATE_INVENTORY_LIST':
            return { ...state, inventoryList: state.inventoryList.filter(item => item.medicineName !== payload) }
        case 'UPDATE_TEAM_LIST':
            return { ...state, teamList: state.teamList.filter(item => item.salesExecutiveId !== payload) }
        case 'UPDATE_ALL_ORDERS':
            return { ...state, allOrders: state.allOrders.filter(item => item.orderId !== payload) }
        case 'UPDATE_EXECUTIVE_DETAILS':
            return { ...state, teamList: payload }
        case 'UPDATE_INVENTORY_DETAILS':
            return { ...state, inventoryList: payload }
        case 'MEDICINE_ID_FOR_UPDATE':
            return { ...state, medicineIdForUpdate: payload }
        case 'USER_ID_FOR_UPDATE':
            return { ...state, userIdForUpdate: payload }
        default:
            return state
    }
}


export default loginReducer;