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
      return new Promise(()=>{
          
      })
    }
  
    getByNIK(nik) {}
  }