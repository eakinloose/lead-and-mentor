/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the editor's CSS

const FormContainer = styled.div`
   width: 100%;
   max-width: 600px;
   margin: 20px auto;
   padding: 20px;
   border: 1px solid #ccc;
`;

const EditNewsForm = ({ selectedNews, setSelectedNews }) => {
   const [title, setTitle] = useState(selectedNews ? selectedNews.title : "");
   const [body, setBody] = useState(selectedNews ? selectedNews.body : "");
   const isEdit = Boolean(selectedNews);

   const handleSubmit = (e) => {
      e.preventDefault();
      const newsData = {
         title,
         body,
      };

      console.log("Submitted data:", newsData);

      // Handle updating or creating the news based on isEdit
      if (isEdit) {
         console.log("Update existing news:", selectedNews.id);
      } else {
         console.log("Create new news.");
      }

      setSelectedNews(null);
   };

   return (
      <FormContainer>
         <h2>{isEdit ? "Edit News" : "Create News"}</h2>
         <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               required
            />
            <label>Body:</label>
            <ReactQuill value={body} onChange={(value) => setBody(value)} />
            <br />
            <button type="submit">{isEdit ? "Update" : "Submit"}</button>
            <button type="button" onClick={() => setSelectedNews(null)}>
               Cancel
            </button>
         </form>
      </FormContainer>
   );
};

export default EditNewsForm;
