import './btnDemo.css'

const BtnDemo = ( {link} ) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline-demo">
      Demo version
    </a>
  );
};

export default BtnDemo;
