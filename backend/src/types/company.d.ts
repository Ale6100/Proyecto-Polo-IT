export interface TypeSocialNetwork {
    name: string,
    url: string
}

export interface CompanyType {
    info: string,
    logo: string,
    video: string,
    linksSocialNetworks: TypeSocialNetwork[],
    website: string,
    mail: string
}

export interface CompanyTypeInMongo extends CompanyType {
    _id: string,
    __v: number
}
