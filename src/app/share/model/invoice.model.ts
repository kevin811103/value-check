// import { InvoiceDetail, InvoiceQrcodeInfo } from "../interface/invoice";

export class InvoiceQrcodeInfo {
    // private invoiceQrCodeInf: InvoiceQrcodeInfo

    // public setData(

    //     number,
    //     date,
    //     randomCode,
    //     taxId,
    //     InvoiceDetailList,

    // ) {
    //     this.invoiceQrCodeInf = {
    //         number: number,
    //         date: date,
    //         randomCode: randomCode,
    //         taxId: taxId,
    //         InvoiceDetailList: InvoiceDetailList
    //     };
    // }
    number: string;  //發票號碼
    date: string; //日期
    randomCode: string; //隨機號碼
    taxId: string; //賣方
    InvoiceDetailList: Array<InvoiceDetail>; //明細list
    private _test?: string;
    get test(): string {
        return this._test;
    }

    set test(value: string) {
        this._test = value;
    }
  
}


export class InvoiceDetail {


    sequence: string;  //總共幾項
    name: string;   //品名
    quantity: string; //數量
    price: string;   //價格
}