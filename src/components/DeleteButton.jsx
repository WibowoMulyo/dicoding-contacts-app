function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button className="contact-item__delete" onClick={() => onDelete(id)}>
        x
      </button>
    </div>
  );
}

export default DeleteButton;
