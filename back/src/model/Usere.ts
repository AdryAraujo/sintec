// Importe os módulos necessários
import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Defina a interface para os atributos do usuário
interface UsereAttributes {
  id: number;
  nome: string;
  email: string;
}

// Defina a interface para os atributos de criação do usuário
interface UsereCreationAttributes extends Optional<UsereAttributes, 'id'> {}

// Crie a classe de modelo do usuário estendendo a classe Model do Sequelize
class Usere extends Model<UsereAttributes, UsereCreationAttributes> implements UsereAttributes {
  public id!: number; // Usando "!" para indicar que o valor não será null ou undefined
  public nome!: string;
  public email!: string;
}

// Função para inicializar o modelo e a conexão com o banco de dados
async function init() {
  const sequelize = new Sequelize('database', 'userename', 'password', {
    host: '172.25.76.71',
    dialect: 'postgres',
  });

  // Inicialize o modelo de usuário
  Usere.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize, // Passa a instância do Sequelize
      modelName: 'usere', // Nome da tabela no banco de dados
      timestamps: false, // Define se terá colunas de timestamp (created_at e updated_at)
    }
  );

  // Sincronize o modelo com o banco de dados
  await sequelize.sync({ alter: true });
}

// Chame a função de inicialização para criar a tabela de usuário no banco de dados
init();