import {_axios} from './api';

export const createShelter = data => {
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
            openingHour: data.openingHour,
            closingHour: data.closingHour,
            capacity: data.capacity ? data.capacity : 0,
            injured: data.injured ? data.injured : 0,
            missing: data.missing ? data.missing : 0,
            deceased: data.deceased ? data.deceased : 0
        },
        need: data.need,
        offer: data.offer,
        description: data.description,
        status: 'PENDING'
    }
    return _axios.post('/entry-shelter/', finalData);
}

export const getMyShelters = () => {
    return _axios.get('/entry-shelter/my-entries');
}

export const getShelterVeryReports = () => {
    let query = "status=APPROVED";
    return _axios.get(`/entry-shelter?${query}`)
}

export const getShelterReports = status => {
    let query;
    if (status === 'ALL') {
        query = '';
    } else {
        query = `?status=${status}`;
    }
    return _axios.get(`/entry-shelter${query}`)
}

export const updateShelter = (id, status) => {
    const data = {
        status: status
    }
    return _axios.patch(`/entry-shelter/${id}`, data);
};

export const deleteShelter = id => {
    return _axios.delete(`/entry-shelter/${id}`);
}