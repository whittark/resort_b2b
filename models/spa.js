module.exports = function(sequelize, DataTypes) {
    var Spa = sequelize.define("Spa", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: ["^[a-z]+$",'i']
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          not: ["[a-z]",'i']
        }
      },
      email: {
        type:DataTypes.STRING,
        allowNull: false,
        validate:  {
          isEmail: true
        }
      },
      res_time: {
        type: DataTypes.TIME,
        allowNull:false
      },
      service: {
        type: DataTypes.STRING,
        allowNull: false
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
      
    });
  
    Spa.associate = function(models) {
      Spa.belongsTo(models.Guest, {
        onDelete: "cascade"
      });
    
    };
  
  
    return Spa;
  };