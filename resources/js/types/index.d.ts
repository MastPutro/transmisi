export interface User {
    divisi: any;
    ukuran_seragam: any;
    npwp: any;
    no_rekening: any;
    bank: any;
    whatsapp: any;
    domisili: any;
    alamat: any;
    ktp: any;
    tempat_tgl_lahir: any;
    status_user: any;
    status_data: any;
    foto: any;
    site: any;
    idcard: any;
    permissions: ReactNode;
    roles: any;
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
