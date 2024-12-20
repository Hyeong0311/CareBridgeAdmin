import axios from 'axios';

const host = 'http://10.10.10.105:8080/api/v1/faq';
// const host = 'http://localhost:8080/api/v1/faq';

// FAQ 전체 목록 가져오기
export const getFAQList = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/list?page=${pageValue}`)
    console.log(res.data)

    return res.data
}

// FAQ 간병인 목록 가져오기
export const getFAQListGiver = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/giverlist?page=${pageValue}`);
    console.log(res.data)

    return res.data
}

// FAQ 보호자 목록 가져오기
export const getFAQListTaker = async (page) => {

    const pageValue = (Number)(page || 1)

    const res = await axios.get(`${host}/takerlist?page=${pageValue}`);
    console.log(res.data)

    return res.data
}

// FAQ 등록하기
export const insertFAQ = async (faqAdd) => {
    try {
        const res = await axios.post(`${host}/insert`, faqAdd);
        return res.data;
    } catch (e) {
        console.error('FAQ Post Add Error', e);
        throw e;
    }
}

// FAQ 삭제하기
export const deleteFAQ = async (qno) => {

    const res = await axios.post(`${host}/delete/${qno}`)

    console.log(res.data)

    return res.data
}

// FAQ 수정하기
export const updateFAQ = async (fno, faq) => {

    const res = await axios.post(`${host}/update/${fno}`, faq, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return res.data;
}

// FAQ 상세조회
export const getFAQOne = async (fno) => {

    const res = await axios.get(`${host}/read/${fno}`);
    console.log(res.data)
    return res.data;
}