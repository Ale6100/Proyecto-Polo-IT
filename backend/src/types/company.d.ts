export interface TypeSocialNetwork {
    name: string,
    url: string
}

export interface CompanyType {
    name: string,
    info: string,
    logo: string,
    video: string,
    linksSocialNetworks: TypeSocialNetwork[],
    website: string,
    mail: string,
    category: string[],
    productOrService: string[]
}

export interface CompanyTypeInMongo extends CompanyType {
    _id: string,
    __v: number
}

export interface OptionalCompanyType extends Partial<CompanyType> {} // Igual a la interfaz CompanyType, pero con sus propiedades opcionales