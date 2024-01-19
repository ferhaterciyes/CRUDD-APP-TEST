const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // formdaki inputlardan obje oluştur
    const formData = new FormData(e.target);
    const newData = Object.fromEntries(formData.entries());
    console.log(newData);
    // kullanıcıyı Listeye ekle
    addUser(newData);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-5">
        <label htmlFor="name">İsim</label>
        <input
          id="name"
          required
          type="text"
          name="name"
          className="form-control"
          placeholder="ör: Mustafa"
        />
      </div>
      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          required
          type="email"
          name="email"
          className="form-control"
          placeholder="ör:mustafa@gmail.com"
        />
      </div>
      <div className="my-4">
        <label htmlFor="">İsim</label>
        <input
          required
          type="number"
          name="age"
          className="form-control"
          placeholder="ör:25"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Kullanıcı Ekle
      </button>
    </form>
  );
};

export default Form;
