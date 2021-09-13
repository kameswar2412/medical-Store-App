export const adminLogin = (payload) => ({
    type: 'ADMIN_LOGIN',
    payload
})
export const search = (payload) => ({
    type: 'SEARCH_DATA',
    payload
})
export const orderData = (payload) => ({
    type: 'ORDER_DATA',
    payload
})

    
    export const sdd = (payload) => ({
    type: 'S_D_D',
    payload
})
export const employeeData = (payload) => ({
    type: 'EMPLOYE_DATA',
    payload
})

export const adminLogout = (payload) => ({
    type: 'ADMIN_LOGOUT',
    payload
})

export const salesLogin = (payload) => ({
    type: 'SALES_LOGIN',
    payload
})

export const salesLogout = (payload) => ({
    type: 'SALES_LOGOUT',
    payload
})

// Admin Access
export const addMedicine = (payload) => ({
    type: 'ADD_MEDICINE',
    payload
})

export const addSalesExecutive = (payload) => ({
    type: 'ADD_SALES_EXECUTIVE',
    payload
})


export const updateInventoryList = (payload) => ({
    type: 'UPDATE_INVENTORY_LIST',
    payload
})

export const updateTeamList = (payload) => ({
    type: 'UPDATE_TEAM_LIST',
    payload
})


export const updateAllOrders = (payload) => ({
    type: 'UPDATE_ALL_ORDERS',
    payload
})


export const updateExecutiveDetails = (payload) => ({
    type: 'UPDATE_EXECUTIVE_DETAILS',
    payload
})

export const updateInventoryDetails = (payload) => ({
    type: 'UPDATE_INVENTORY_DETAILS',
    payload
})


export const userIdForUpdate = (payload) => ({
    type: 'USER_ID_FOR_UPDATE',
    payload
})

export const medicineIdForUpdate = (payload) => ({
    type: 'MEDICINE_ID_FOR_UPDATE',
    payload
})



// ORDERS BY EXECUTIVE

export const createOrder = (payload) => ({
    type: 'CREATE_ORDER',
    payload
})

export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload
})


export const emptyCart = (payload) => ({
    type: 'EMPTY_CART',
    payload
})
