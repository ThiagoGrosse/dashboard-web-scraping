import { ImageType } from "./Image";
import { InfoType } from "./Info";

export type DataItemType = {
    id: number;
    url: string;
    store_id: string;
    offer_status: boolean;
    created_at: string;
    updated_at: string;
    info: InfoType[];
    store: {
        store_name: string;
    };
    images: ImageType[];
};
