import React, { useState } from "react";
import styled from "styled-components";
import { handleSubmit } from "../api/Api";

const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const MovieForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        year: "",
        duration: "",
        budget: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <FormWrapper>
            <FormField>
                <Label>Nombre:</Label>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label>Fecha de estreno:</Label>
                <Input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label>Duración (minutos):</Label>
                <Input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                />
            </FormField>
            <FormField>
                <Label>Presupuesto:</Label>
                <Input
                    type="text"
                    name="budget"
                    value={formData.hours}
                    onChange={handleChange}
                />
            </FormField>
            <Button onClick={handleSubmit}>Guardar</Button>
        </FormWrapper>
    );
};

export default MovieForm;