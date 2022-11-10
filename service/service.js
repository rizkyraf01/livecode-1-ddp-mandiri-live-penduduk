export class PopulationService {
    constructor() {
      this.populationArray = [];
    }
  
    register(population) {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(population.id
                  &&population.name
                  &&population.gender
                  &&population.nik
                  &&population.birthDate
                  &&population.placeOfBirth
                  &&population.provinceId
                  &&population.CityId
                  &&population.districtId)
                  {
                    this.populationArray.push(population);
                    resolve(`Berhasil Registrasi`);
                  }else{
                    reject(`Tidak dapat registrasi`)
                  }
            },5000)
        })
    }
  
    getAll() {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(this.populationArray.length==0){
            reject(`Tidak ada data`)
          }else{
            resolve(this.populationArray);
          }
        },2000)          
      })
    }
  
    getByNIK(nik) {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let getNik = this.populationArray.find(function(population){
               return population.nik === nik;
            })
            if (getNik) {
              resolve(getNik);
            } else {
              reject(`Buku dengan nik ${nik} ditemukan`);
            }
        })
      })
    }
  }