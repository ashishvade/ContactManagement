import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../ReduxData/action';

function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(addContact(form))

    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2">
            <h2 className="mb-4 text-2xl font-semibold">Create Contact Screen</h2>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="first-name">
                 <b>First Name</b>
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    placeholder='Enter First Name'
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    placeholder='Enter Last Name'
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="number"
                    name="mob"
                    min='10'
                    max='10'
                    placeholder='Enter Mobile No '
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <p><input name="status" onChange={handleChange} value='active' id="status" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input> <b>Active</b></p>
               <p><input name="status" onChange={handleChange} value='Inactive' id="status" type="radio"class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/><b>InActive</b></p>
                
               {/* <select
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option type="radio" value={'active'}>Active</option>
                    <option type="radio" value={"inactive"}>Inactive</option>
                </select> */}
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSave}
            >
                Save Contact
            </button>
            </form>
        </div>
    );
}


export default ContactForm


// echo "# ContactManagementApp" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ashishvade/ContactManagementApp.git
// git push -u origin main

// git remote add origin https://github.com/ashishvade/ContactManagementApp.git
// git branch -M main
// git push -u origin main