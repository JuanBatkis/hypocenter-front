import {_axios} from './api';

export const createDamage = data => {
    const finalData = {
        building_name: data.building_name,
        location: {
            city: data.city,
            state: data.state,
            municipality: data.municipality,
            zipCode: data.zipCode,
            streetName: data.streetName,
            references: data.references
        },
        general: {
            phone: data.phone,
            damageType: data.damageType,
            infraType: data.infraType,
            useType: data.useType,
            trapped: data.trapped ? data.trapped : 0,
            injured: data.injured ? data.injured : 0,
            missing: data.missing ? data.missing : 0,
            deceased: data.deceased ? data.deceased : 0
        },
        need: data.need,
        offer: data.offer,
        description: data.description,
        status: 'PENDING'
    }
    return _axios.post('/entry-damage/', finalData);
}

export const getMyDamages = () => {
    return _axios.get('/entry-damage/my-entries');
}

export const getDamageVeryReports = () => {
    let query = "status=APPROVED";
    return _axios.get(`/entry-damage?${query}`)
}

export const getDamageReports = status => {
    let query;
    if (status === 'ALL') {
        query = '';
    } else {
        query = `?status=${status}`;
    }
    return _axios.get(`/entry-damage${query}`)
}

export const updateDamage = (id, status) => {
    const data = {
        status: status
    }
    return _axios.patch(`/entry-damage/${id}`, data);
};

export const deleteDamage = id => {
    return _axios.delete(`/entry-damage/${id}`);
}