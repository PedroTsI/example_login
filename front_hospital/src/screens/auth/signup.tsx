import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const handleInputChange = (event: any) => {
    const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log('Sucesso! Token de autenticação:', response.data);
            console.log(formData)
            navigate('/login')
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };
    return (
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Cadastro de Usuario</h2>
          <form style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                style={styles.input}
                placeholder="Digite seu email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                style={styles.input}
                placeholder="Digite sua senha"
                onChange={handleInputChange}
                value={formData.password}
              />
            </div>
            <button
              type="submit"
              style={styles.button}
              onClick={handleSubmit}
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    );
};
    const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
    },
    formContainer: {
        background: '#ffffff',
        padding: '20px',
        borderRadius: '4px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        fontSize: '16px',
        marginBottom: '5px',
        marginRight: '5px',
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
};

export default SignupForm;