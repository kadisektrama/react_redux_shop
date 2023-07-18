type TPartEachProduct = {
    _id: string,
    title: string,
    description: string,
    price: number,
    currency: TCurrency,
    reviews_count: number,
    rating: number,
    user_id: string,
    images: any,
    __t: string,
    __v: number,
}

export type TBook = TPartEachProduct & {
    author: string
}
export type TBookData = {
    data: TBook[]
}
export type TBookDataSingle = {
    data: TBook
}

export type TUser = {
    _id?: string,
    first_name: string,
    last_name: string,
    user_name: string,
    role: TRole & string,
    email?: string,
    phone?: string,
    image: any,
}
export type TUserData = {
    data: TUser[]
}
export type TUserDataSingle = {
    data: TUser
}

export type TCategory = {
    _id: string,
    title: string,
    description: string,
    db_name: string,
}
export type TCategoryData = {
    data: TCategory[]
}
export type TCategoryDataSingle = {
    data: TCategory
}

export type TProduct = TBook | TBicycle
export type TProductData = {
    data: TProduct[]
}

export type TBicycle = TPartEachProduct & {
    color: string,
    speeds_count: number,
    pedals: string,
    brakes: string,
    shock_absorber: boolean,
    wheel: number,
    frame_size: number,
    rider_height: number,
}
export type TBicycleData = {
    data: TBicycle[]
}
export type TBicycleDataSingle = {
    data: TBicycle
}

export type TCurrency = {
    _id?: string,
    name: string,
}
export type TCurrencyData = {
    data: TCurrency[]
}
export type TCurrencyDataSingle = {
    data: TCurrency
}

export type TRole = {
    _id: string,
    name: string,
}
export type TRoleData = {
    data: TRole[]
}
export type TRoleDataSingle = {
    data: TRole
}

export type TLogin = {
    user_name: string,
    password: string,
}
export type TRegistration = {
    first_name: string,
    last_name: string
    user_name: string,
    password: string,
    email: string,
    phone: string,
}

export type TOrder = {
    status: string,
    product_id: TProduct,
    user_id: TUser,
    _id?: string,
    __v?: string,
}
export type TOrderData = {
    data: TOrder[]
}
export type TOrderDataSingle = {
    data: TOrder
}

export type TFavourite = {
    _id?: string,
    user_id: TUser | string,
    product_id: TProduct | string
}
export type TFavouriteData = {
    data: TFavourite[]
}
export type TFavouriteDataSingle = {
    data: TFavourite
}

export type TChat = {
    _id?: string,
    guest_uid: TUser,
    host_uid: TUser,
}
export type TChatData = {
    data: TChat[]
}
export type TChatDataSingle = {
    data: TChat
}

export type TChatMessage = {
    _id?: string,
    message: string,
    uid: TUser,
}
export type TChatMessageData = {
    data: TChatMessage[]
}
export type TChatMessageDataSingle = {
    data: TChatMessage
}