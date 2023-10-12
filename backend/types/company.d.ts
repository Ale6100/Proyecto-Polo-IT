export interface CompanyType {
    info: string,
    logo: string,
    video: string,
    linksSocialNetworks: string[],
    website: string,
    mail: string
}

export interface CompanyTypeInMongo extends CompanyType {
    _id: string,
    __v: number
}
