
export function format (data:string,sensor_room:string):string[][] | Error{
    if (!sensor_room.includes('_') || !sensor_room.includes('-')) {
        return new Error('Formato incorreto do nome do sensor (ChirpStack). O formato correto é Ex:sensor_001-room:001');
    }
    let [sensor,id_entity] = sensor_room.split('-')
    let [name_sensor,numberId] = sensor.split('_') 
  return data.split(',').map((current) => {
        let [object_id,value] = current.split('|') 
        return (`${object_id}_${numberId} ${object_id}_Level|${value}`).split(' ')
    })
}

console.log(format('CO_MQ7|11.23,LPG_MQ9|10.08,CH4_MQ9|16.28,CO_MQ9|5.35,CO_MQ135|0.18,Alcool_MQ135|0.11,CO2_MQ135|0.31,Toluen_MQ135|0.04,MH4_MQ135|0.63,Aceton_MQ135|0.03,Temperatura|2,Humidade|3','sensor_001-room:001'))