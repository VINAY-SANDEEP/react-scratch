import propType from 'prop-types'
function Student(props) {
      return (
        <>
        <center>
        <div className="card">
       <img src={props.img}/>
            <p>Role:{props.role}</p>
            <p>eduction : {props.edu}</p>
            <p>year : {props.year}</p>
            <p>Skils:{props.skill}</p>
        </div>
        </center>
        </>
      );
}
Student.propType = {
  img: propType.string,
  role: propType.string,
  edu: propType.string,
  year: propType.string,
  skill: propType.string,
}
Student.defaultProps = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLQXtZ4Tvsvm69Zb4nGahXKnjdluJf3f7RA&s",
  role: "student",
  edu: "B.tech",
  year: "2019",
  skill: "java"

}
export default Student;