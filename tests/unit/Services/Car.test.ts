import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { cars, getCarById, carWithoutId, resultCarWitId } from './CarMocks';
import CarODM from '../../../src/Models/CarODM';

describe('Testando a service de Car', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Verifica se o retorno da requisição GET', function () {
    it(
      'sem especificar um id na URL, permite visualizar a lista com todos os carros com sucesso', 
      async function () {
      // Arrange
        sinon.stub(Model, 'find').resolves(cars);
      
        // Act
        const service = new CarService();
        const result = await service.find();
        
        // Assert
        expect(result).to.be.deep.equal(cars);
      },
    );
      
    it(
      'especificando um id válido, permite visualizar apenas o carro com id correspondente', 
      async function () {
        // Arrange
        sinon.stub(Model, 'findById').resolves(getCarById);
      
        // Act
        const service = new CarService();
        const result = await service.findOne('637bf15706eb45228312c8c3');
        
        // Assert
        expect(result).to.be.deep.equal(getCarById);
      },
    );

    it(
      'com um id de um carro inexistente, retorna uma mensagem de erro', 
      async function () {
        // Arrange
        sinon.stub(Model, 'findById').resolves({ });
      
        try {
          // Act
          const service = new CarService();
          await service.findOne('6bf15706eb45228312c8c3');
        } catch (error) {
          // Assert
          expect((error as Error).message).to.be.deep.equal('Car not found'); 
        }
      },
    );

    it(
      'com um id inválido, retorna uma mensagem de erro', 
      async function () {
        // Arrange
        sinon.stub(Model, 'findById').resolves({ });
      
        try {
          // Act
          const service = new CarService();
          await service.findOne('6bf15706eb452283123');
        } catch (error) {
          // Assert
          expect((error as Error).message).to.be.deep.equal('Invalid mongo id'); 
        }
      },
    );
  });
  
  describe('Verifica se o retorno da requisição POST', function () {
    it('cadastra um novo carro com sucesso', async function () {
      // Arrange
      sinon.stub(Model, 'create').resolves(resultCarWitId);
      
      // Act
      const service = new CarService();
      const result = await service.insertOne(carWithoutId);
        
      // Assert
      expect(result).to.be.deep.equal(resultCarWitId);
    });
  });

  describe('Verifica se o retorno da requisição PUT', function () {
    it('utilizando um id válido, atualiza um carro com sucesso', async function () {
      // Arrange
      sinon.stub(Model, 'findByIdAndUpdate').resolves(resultCarWitId);
      
      // Act
      const service = new CarService();
      const result = await service.updateOne('637bf0f306eb45228312c8c1', carWithoutId);
        
      // Assert
      expect(result).to.be.deep.equal(resultCarWitId);
    });
    it(
      'utilizando um id inválido, retorna uma mensagem de erro', 
      async function () {
        // Arrange
        sinon.stub(Model, 'findByIdAndUpdate').resolves({});
       
        try {
        // Act
          const service = new CarService();
          await service.updateOne('606eb45228312c8c3', carWithoutId);
        } catch (error) {
          // Assert
          expect((error as Error).message).to.be.deep.equal('Invalid Mongo id'); 
        }
      },
    );
  });

  describe('Verifica se o retorno da requisição DELETE', function () {
    it('utilizando um id válido, deleta um carro com sucesso', async function () {
      // Arrange
      sinon.stub(CarODM.prototype, 'deleteById').resolves(null);
        
      // Act
      const service = new CarService();
      const result = await service.destroy('637bf15706eb45228312c8c3');
        
      // Assert
      expect(result).to.be.deep.equal(null);
    });
  });
});