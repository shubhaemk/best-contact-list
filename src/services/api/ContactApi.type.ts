export interface ContactApiTypes {
    /**
     * id: string - unique id for the user 
     */
    id: string,
    /**
     * gender: string - gender of contact
     */
    gender: string,
    /**
     * firstName: string - first name of contact
     */
    firstName: string,
    /**
     * lastName: string - last name of contact
     */
    lastName: string,
    /**
     * city: string - city of contact
     */
    city: string,
    /**
     * age: number - age of contact
     */
    age: number,
    /**
     * email: string - email of contact
     */
    email: string,
    /**
     * number: string - number of contact
     */
    number: string,
    /**
     * photoUrl: string - photo of contact
     */
    photoUrl: 'string'
}

export type ContactApiHandlerTypes = (data: any) => ContactApiTypes[]

export type ContactApiPropsTypes = {
    pageNumber: number,
    apiHandler: ContactApiHandlerTypes,
    url: string,
}