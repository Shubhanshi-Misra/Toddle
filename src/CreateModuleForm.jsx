import React, { useState } from 'react';

function CreateModuleForm({ onCancel, onCreate }) {
  const [moduleName, setModuleName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(moduleName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2><b>Create new module</b></h2>
      <div className="form-group">
        <label htmlFor="module-name">Module name</label>
        <input
          id="module-name"
          type="text"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          placeholder="Module name"
        />
      </div>
      <div className="form-actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateModuleForm;
