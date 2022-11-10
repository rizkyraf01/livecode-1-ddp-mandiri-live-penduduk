import {PopulationService} from "./service/service.js"
import {Population} from "./model/model.js"
let jamLayanan = 8.45;
let hariLayanan = 'Senin'
const main= async()=>{
    try{
        const populationServices = new PopulationService();
        if(hariLayanan==='Senin'||hariLayanan==='Selasa'|| hariLayanan==='Rabu'|| hariLayanan==='Kamis'|| hariLayanan==='Jumat'){
            if(jamLayanan>=8 && jamLayanan<=14){
                let arrayPopulation = populationServices.populationArray;
                let newOrang = new Population('P0001',
                'Bulan Sutisna',
                'Perempuan',
                '1920024202990001',
                '1999-02-02',
                'Jakarta Barat',
                 '19',
                 '20',
                 '02');
                const tambah = await populationServices.register(newOrang);
                console.log(tambah);
                const list = await populationServices.getAll();
                console.log(list);
    
                const getNik =await populationServices.getByNIK('1920024202990002');
                console.log(getNik);
            }else{
                (console.log(`Layanan Pembuatan KTP Sudah tutup`));
            }
        }else {
            (console.log(`Layanan Pembuatan KTP hanya Senin-Jumat `))
        }        
    }catch(error){
       console.log(error);
    }
}
main();