import React, {useState} from 'react'
import { Navigate } from "react-router-dom";
import Navtop from '../../components/common/Navtop';
import insertBookApi from '../../actions/BookAction';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BookEntry = () => {


  const [titleErr, setTitleErr] = useState(false);
  const [authorErr, setAuthorErr] = useState(false);
  const [pubErr, setPubErr] = useState(false);
  const [priceErr, setPriceErr] = useState(false);
  const [isbnErr, setIsbnErr] = useState(false);
  const [fileErr, setFileErr] = useState(false);

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publication, setPublication] = useState();
  const [price, setPrice] = useState();
  const [isbn, setIsbn] = useState();
  const [selectedFile, setSelectFile] = useState(null); 

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    
  }
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
    
  }
  const handleChangePub = (event) => {
    setPublication(event.target.value);
    
  }
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
   
  }
  const handleChangeIsbn = (event) => {
    setIsbn(event.target.value);
  }
  const handleChangeFile = (event) => {
    console.log(event.target.files[0]);
    setSelectFile(event.target.files[0]);
  }
  const submitForm = (event) => {
    event.preventDefault();
    console.log(title+author+selectedFile);
    const formData = new FormData();
    formData.append("title",title);
    formData.append("author", author);
    formData.append("pub", publication);
    formData.append("price",price);
    formData.append("image",selectedFile);
    formData.append("isbn", isbn);
    insertBookApi(formData).then(
      (res) =>{
        if(res.success === true){
          toast.success(res.status,{position: toast.POSITION.TOP_CENTER});
        }else{
          toast.error(res.status,{position: toast.POSITION.TOP_CENTER});
        }
      },
      (err) =>{
          toast.error(err.message, {
            position: toast.POSITION.TOP_CENTER
        });
      }
    );
  }
  const loggedInUser = localStorage.getItem("authenticated");
  if(!loggedInUser){
    return <Navigate replace to="/" />;
  }else{
    return (
      <div>
        <Navtop/>
          <div class="main-container sidebar-closed sbar-open" id="container">
            <div class="overlay"></div>
            <div class="cs-overlay"></div>
            <div class="search-overlay"></div>
            <div id="content" className="main-content">
            <ToastContainer />
              <div className="container-fluid">
                <div className="page-header">
                    <div className="page-title">
                        Book Hut - New Book Entry
                    </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-header text-center bg-warning">
                          New Book Entry Form
                      </div>
                      <div className="card-body">
                        <form onSubmit={submitForm} enctype="multipart/form-data">
                          <div className="mb-2">
                            <input 
                              type="text" 
                              className="form-control" 
                              onChange={handleChangeTitle} 
                              id="title" 
                              value={title}
                              name="title"
                              aria-describedby="titleHelp" 
                              placeholder="Enter Title" />
                              {titleErr ? <span style={{ color: 'red'}}>Title is required</span> : ""}
                          </div>
                          
                          <div className="mb-2">
                            <input type="text" 
                              className="form-control"
                              onChange={handleChangeAuthor} 
                              id="author"  
                              name="author"
                              value={author}
                              placeholder='Enter Author Name'/>
                              {authorErr ? <span style={{ color: 'red'}}>Author Name is required</span> : ""}
                          </div>
                          <div className="mb-2">
                            <input type="text" 
                            className="form-control" 
                            onChange={handleChangePub}
                            name="publication"
                            value={publication} 
                            id="publication" 
                            placeholder='Enter Publication Name'/>
                            {pubErr ? <span style={{ color: 'red'}}>Publication is required</span> : ""}
                          </div>
                          <div className="mb-2">
                            <input type="text" 
                            className="form-control" 
                            onChange={handleChangePrice} 
                            id="price" 
                            name="price"
                            value={price}
                            placeholder='Enter Price'/>
                            {priceErr ? <span style={{ color: 'red'}}>Price is required</span> : ""}
                          </div>
                          <div className="mb-2">
                            <input type="text" 
                            className="form-control" 
                            onChange={handleChangeIsbn} 
                            id="isbn" 
                            name="isbn"
                            value={isbn}
                            placeholder='Enter ISBN Number'/>
                            {isbnErr ? <span style={{ color: 'red'}}>ISBN is required</span> : ""}
                          </div>
                          <div class="mb-3">
                            <input className="form-control"
                             onChange={handleChangeFile} 
                             type="file" 
                            />
                             {fileErr ? <span style={{ color: 'red'}}>File is required</span> : ""}
                          </div>
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      )
    }
}
export default BookEntry;