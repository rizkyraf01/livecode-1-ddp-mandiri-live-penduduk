export class PopulationService {
    constructor() {
      this.populationArray = [];
      this.nikArray=[];
    }
  
    register(populationsdata,population) {
        return new Promise((resolve,reject)=>{
          const {
            id,
            name,
            gender,
            nik,
            birthDate,
            placeOfBirth,
            provinceId,
            CityId,
            districtId,
          } = population;
          let olahBirth = birthDate[8]+birthDate[9]+birthDate[5]+birthDate[6]+birthDate[2]+birthDate[3];
          if(gender=='Perempuan'){
            olahBirth = (Number(birthDate[8])+4)+birthDate[9]+birthDate[5]+birthDate[6]+birthDate[2]+birthDate[3];
          }
          let getpersonNik=(`${provinceId}${CityId}${districtId}${olahBirth}${id}`)                    

          
          if(!populationsdata.find((population)=>{
            return population.nik == getpersonNik
          })){            
            population.nik = getpersonNik;
            populationsdata.push(population)
            resolve(`Data Penduduk : \n ID :${id} \n Nama Lenkap : ${name} \n NIK : ${population.nik} \n Tempat,Tanggal Lahir: ${placeOfBirth},${birthDate}`
            );
          }else {
            reject(`nik sudah tersedia`)
          }
            setTimeout(()=>{
                if(population.id
                  &&population.name
                  &&population.gender
                  &&population.birthDate
                  &&population.placeOfBirth
                  &&population.provinceId
                  &&population.CityId
                  &&population.districtId)
                  {
                    this.populationArray.push(population);
                  }else{

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
              resolve(`Data dengan nik ${nik} ditemukan`);
            } else {
              reject(`Tidak ada data ${nik} ditemukan`);
            }
        })
      })
    }
  }