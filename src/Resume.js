import React, { useState } from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import useAutocomplete from 'use-autocomplete';
import Select from 'react-select';

const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'php', label: 'PHP' },
    { value: 'c#', label: 'C#' },
    { value: 'css', label: 'CSS' },
    { value: '', label: 'C#' },
  ];
  

  

export const Resume = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [education, setEducation] = useState("");
    const [experience, setExperience] = useState("");
    const [company, setCompany] = useState("");
    const [designation, setDesignation] = useState("");
    const [fields, setFields] = useState([{ value: null }]);
    const [fieldsTwo, setFieldsTwo] = useState([{ value: null }]);
    const [selectedOption, setSelectedOption] = useState("");

    const newHandleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    // state = {
    //     selectedOption: null,
    //   };
    // const [pickerItems, setPickerItems] = useState(countries);
    // const [selectedItems, setSelectedItems] = useState([]);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${name}`)
    }

    const handleChange = (i, event) => {
        const values = [...fields];
        values[i].value = event.target.value;
        setFields(values);
    }
    
    const handleAdd = () => {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }
    
    const handleRemove = (i) => {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }

    const handleChangeTwo = (i, event) => {
        const values = [...fieldsTwo];
        values[i].value = event.target.value;
        setFieldsTwo(values);
    }
    
    const handleAddTwo = () => {
        const values = [...fieldsTwo];
        values.push({ value: null });
        setFieldsTwo(values);
    }
    
    function handleRemoveTwo(i) {
        const values = [...fieldsTwo];
        values.splice(i, 1);
        setFieldsTwo(values);
    }

    return(
        <Container className="py-5">
            <Row>
                <Col xs={12}>
                    <div className="main-form mx-auto px-4 px-sm-2 px-md-1">
                        <form onSubmit={handleSubmit}>
                            <h5>Details</h5>
                            <div className="personal-details">
                                <div className="name form-group">
                                    <label className="w-100">
                                    Full Name:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className="email form-group">
                                    <label className="w-100">
                                    Email:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className="address form-group">
                                    <label className="w-100">
                                    Address:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                        />
                                    </label>
                                </div>
                                
                                <div className="phone form-group">
                                    <label className="w-100">
                                    Phone:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="edu-exp-details">
                                <h5>Education & Experience details</h5>
                                <div className="education form-group">
                                    <label className="w-100">
                                    Education:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={education}
                                        required
                                        onChange={e => setEducation(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className="experience form-group">
                                    <label className="w-100">
                                    Experience:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={experience}
                                        required
                                        onChange={e => setExperience(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className="company-institute form-group">
                                    <label className="w-100">
                                    Company/Institute & Year:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={company}
                                        required
                                        onChange={e => setCompany(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className="add-more form-group d-flex flex-column-reverse">
                                    <div className="add-btn">
                                        <button type="button" onClick={() => handleAdd()}>
                                            +
                                        </button>
                                    </div>
                                    {fields.map((field, idx) => {
                                        return (
                                        <label key={`${field}-${idx}`}>
                                            <input
                                            type="text"
                                            placeholder=""
                                            onChange={e => handleChange(idx, e)}
                                            className="form-control w-100"
                                            />
                                            <button type="button" onClick={() => handleRemove(idx)}>
                                                x
                                            </button>
                                        </label>
                                        );
                                    })}
                                </div>
                                <div className="designation-degree form-group">
                                    <label className="w-100">
                                    Designation/Degree:
                                        <input
                                        type="text"
                                        className="form-control w-100"
                                        value={designation}
                                        required
                                        onChange={e => setDesignation(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className="add-more form-group d-flex flex-column-reverse">
                                    <div className="add-btn">
                                        <button type="button" onClick={() => handleAddTwo()}>
                                            +
                                        </button>
                                    </div>
                                    {fieldsTwo.map((field, idx) => {
                                        return (
                                        <label key={`${field}-${idx}`}>
                                            <input
                                            type="text"
                                            placeholder=""
                                            onChange={e => handleChangeTwo(idx, e)}
                                            className="form-control w-100"
                                            />
                                            <button type="button" onClick={() => handleRemoveTwo(idx)}>
                                                x
                                            </button>
                                        </label>
                                        );
                                    })}
                                </div>
                                <Select
                                    defaultValue={'hellos'}
                                    isMulti
                                    value={selectedOption}
                                    onChange={newHandleChange}
                                    options={options}
                                />
                            </div>
                            <input className="py-2 px-4 hk-font mt-4" type="submit" value="Submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}