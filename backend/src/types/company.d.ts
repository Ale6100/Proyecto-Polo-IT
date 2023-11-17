export interface TypeSocialNetwork {
    name: string,
    url: string
}

export interface FiltersType {
    bigdata?: boolean,
    cloud?: boolean,
    testing?: boolean,
    softwarepropio?: boolean,
    softwarepropioverticales?: boolean,
    softwareterceros?: boolean,
    softwaretercerosverticales?: boolean,
    asesoriait?: boolean,
    mantenimiento?: boolean,
    actividadesexterior?: boolean,
    capacitacion?: boolean,
    consultoria?: boolean
}

export interface CompanyType extends Required<FiltersType> {
    name: string,
    info: string,
    logo: string,
    video: string,
    website: string,
    mail: string[],
    linksSocialNetworks: TypeSocialNetwork[]
}

export interface CompanyTypeInMongo extends CompanyType {
    _id: string,
    __v: number
}

export interface OptionalCompanyType extends Partial<CompanyType> {} // Igual a la interfaz CompanyType, pero con sus propiedades opcionales
