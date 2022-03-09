import { useEffect, useState } from "react"

const LoadAPI = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const API = `http://localhost:5000/students`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setStudents(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return {
        students,
        setStudents,
    }
}
export default LoadAPI;