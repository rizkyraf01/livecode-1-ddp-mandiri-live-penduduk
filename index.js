import {PopulationService} from "./service/service.js"
import {Population} from "./model/model.js"
let jamLayanan = 8.45;
let hariLayanan = 'Senin'
let id = '0001'
let name = 'Bulan Sutisna'
let gender = 'Perempuan'
let birthDate = '1999-02-02'
let placeOfBirth = 'Jakarta Barat'
let provinceId = '19'
let CityId = '20'
let districtId= '02'
const main= async()=>{
    try{
        let populationData = new Population(
            id,
            name,
            gender,
            null,
            birthDate,
            placeOfBirth,
            provinceId,
            CityId,
            districtId
          );
        const populationServices = new PopulationService();
        if(hariLayanan==='Senin'||hariLayanan==='Selasa'|| hariLayanan==='Rabu'|| hariLayanan==='Kamis'|| hariLayanan==='Jumat'){
            if(jamLayanan>=8 && jamLayanan<=14){
                let arrayPopulation = populationServices.populationArray;
                let arrayPopulationNik = populationServices.nikArray;
                let newOrang = new Population('0001',
                'Bulan Sutisna',
                'Perempuan',
                '1920024202990002',
                '1999-02-02',
                'Jakarta Barat',
                 '19',
                 '20',
                 '02');
                const tambah = await populationServices.register(populationServices.populationArray,populationData);
                console.log(tambah);
                const list = await populationServices.getAll();
                console.log(list);
                
                // let newPopulation = new Population();
                const getNik =await populationServices.getByNIK('1920024202990002');
                console.log(getNik);

                // console.log(arrayPopulationNik);
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