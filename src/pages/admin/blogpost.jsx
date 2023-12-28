import { useState, useEffect } from "react";
import styled from "styled-components";
import EditNewsForm from "../../components/editForm";
import ReactPaginate from "react-paginate";

const AdminContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: flex-start;
`;

const NewsCard = styled.div`
   width: 25%;
   padding: 10px;
   border: 1px solid #ccc;
   margin: 10px;
   display: flex;
   flex-direction: column;
   border-radius: 5px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
   width: 100%;
   height: 150px;
   object-fit: cover;
   border-radius: 5px 5px 0 0;
`;

const CardTitle = styled.h3`
   margin: 10px 0;
`;

const CardBody = styled.p`
   margin-bottom: 20px;
   height: 120px;
   overflow: hidden;
`;

const CardActions = styled.div`
   display: flex;
   justify-content: space-between;
`;

const ActionButton = styled.button`
   background-color: ${({ theme }) => theme.colors.button};
   color: #fff;
   border: none;
   border-radius: 5px;
   padding: 8px 12px;
   cursor: pointer;
`;

const PaginationContainer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 20px;

   ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
         margin: 0 5px;

         a {
            padding: 5px 10px;
            border-radius: 5px;
            background-color: ${({ theme }) => theme.colors.button};
            color: #fff;
            text-decoration: none;
         }

         &.active {
            background-color: ${({ theme }) => theme.colors.button};
         }
      }
   }
`;

const Blogpost = () => {
   const [newsList, setNewsList] = useState([]);
   const [selectedNews, setSelectedNews] = useState(null);
   const [currentPage, setCurrentPage] = useState(0);
   const itemsPerPage = 12;

   useEffect(() => {
      // Fetch data from the JSONPlaceholder API
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((data) => setNewsList(data));
   }, []);

   const handleEdit = (news) => {
      setSelectedNews(news);
   };

   const handleDelete = (id) => {
      // In this case, we can't actually delete from the API as it's a dummy API, but we can filter it from the list
      setNewsList((prevList) => prevList.filter((news) => news.id !== id));
      setSelectedNews(null); // Close the edit form if open
   };

   const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
   };

   const offset = currentPage * itemsPerPage;
   const paginatedNews = newsList.slice(offset, offset + itemsPerPage);

   return (
      <div>
         <h1 style={{ textAlign: "center" }}>Admin Panel</h1>
         <AdminContainer>
            <div>
               {selectedNews ? (
                  <EditNewsForm
                     selectedNews={selectedNews}
                     setSelectedNews={setSelectedNews}
                  />
               ) : (
                  <EditNewsForm setSelectedNews={setSelectedNews} />
               )}
            </div>
            {paginatedNews.map((news) => (
               <NewsCard key={news.id}>
                  <CardImage src="https://via.placeholder.com/300" alt="Card" />
                  <CardTitle>{news.title}</CardTitle>
                  <CardBody>{news.body}</CardBody>
                  <CardActions>
                     <ActionButton onClick={() => handleEdit(news)}>
                        Edit
                     </ActionButton>
                     <ActionButton onClick={() => handleDelete(news.id)}>
                        Delete
                     </ActionButton>
                  </CardActions>
               </NewsCard>
            ))}
         </AdminContainer>
         <PaginationContainer>
            <ReactPaginate
               previousLabel={"← Previous"}
               nextLabel={"Next →"}
               breakLabel={"..."}
               pageCount={Math.ceil(newsList.length / itemsPerPage)}
               onPageChange={handlePageChange}
               containerClassName={"pagination"}
               activeClassName={"active"}
            />
         </PaginationContainer>
      </div>
   );
};

export default Blogpost;
