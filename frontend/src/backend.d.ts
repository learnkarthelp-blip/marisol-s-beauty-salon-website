import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    id: bigint;
    service: string;
    fullName: string;
    email: string;
    preferredDate: string;
    preferredTime: string;
    phoneNumber: string;
}
export interface backendInterface {
    getAllBookings(): Promise<Array<Booking>>;
    submitBooking(fullName: string, phoneNumber: string, email: string, service: string, preferredDate: string, preferredTime: string): Promise<bigint>;
}
