export class Rest {
    static getHeaders(type: string) {
       
        const APPLICATION_JSON = 'APPLICATION_JSON';
        const FORMDATA = 'FORMDATA';
        let headers = {};
        switch (type) {
            
            case APPLICATION_JSON:
                headers = {
                    'Content-Type': 'application/json',
                }
                return headers;
            case FORMDATA:
                headers = {
                    'Content-Type': 'multipart/form-data',
                }
                return headers;
            default:
                return headers;
        }
    }
}
export enum RestHeader {
    APPLICATION_JSON = 'APPLICATION_JSON',
    FORMDATA = 'FORMDATA'
}