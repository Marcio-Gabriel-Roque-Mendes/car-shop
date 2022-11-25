import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motors, getMotorById, motorWithoutId, resultMotorWitId } from './Motorcycle.mocks';
import MotorcycleODM from '../../../src/Models/MotocycleODM';

describe('Testando a service de Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Verifica se o retorno da requisição GET', function () {
    it(
      'sem especificar um id na URL, permite visualizar a lista com todos os carros com sucesso', 
      async function () {
      // Arrange
        sinon.stub(Model, 'find').resolves(motors);
      
        // Act
        const service = new MotorcycleService();
        const result = await service.find();
        
        // Assert
        expect(result).to.be.deep.equal(motors);
      },
    );
      
    it(
      'especificando um id válido, permite visualizar apenas o carro com id correspondente', 
      async function () {
        // Arrange
        sinon.stub(Model, 'findById').resolves(getMotorById);
      
        // Act
        const service = new MotorcycleService();
        const result = await service.findOne('637bf15706eb45228312c8c3');
        
        // Assert
        expect(result).to.be.deep.equal(getMotorById);
      },
    );

    it(
      'com um id inválido, retorna uma mensagem de erro', 
      async function () {
        // Arrange
        sinon.stub(Model, 'findById').resolves({ });
      
        try {
          // Act
          const service = new MotorcycleService();
          await service.findOne('6bf15706eb45228312c8c3');
        } catch (error) {
          // Assert
          expect((error as Error).message).to.be.deep.equal('Car not found'); 
        }
      },
    );
  });
  
  describe('Verifica se o retorno da requisição POST', function () {
    it('cadastra um novo carro com sucesso', async function () {
      // Arrange
      sinon.stub(Model, 'create').resolves(resultMotorWitId);
      
      // Act
      const service = new MotorcycleService();
      const result = await service.insertOne(motorWithoutId);
        
      // Assert
      expect(result).to.be.deep.equal(resultMotorWitId);
    });
  });

  describe('Verifica se o retorno da requisição PUT', function () {
    it('utilizando um id válido, atualiza um carro com sucesso', async function () {
      // Arrange
      sinon.stub(Model, 'findByIdAndUpdate').resolves(resultMotorWitId);
      
      // Act
      const service = new MotorcycleService();
      const result = await service.updateOne('637bf0f306eb45228312c8c1', motorWithoutId);
        
      // Assert
      expect(result).to.be.deep.equal(resultMotorWitId);
    });
    it(
      'utilizando um id inválido, retorna uma mensagem de erro', 
      async function () {
        // Arrange
        sinon.stub(Model, 'findByIdAndUpdate').resolves({});
       
        try {
        // Act
          const service = new MotorcycleService();
          await service.updateOne('606eb45228312c8c3', motorWithoutId);
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
      sinon.stub(MotorcycleODM.prototype, 'deleteById').resolves(null);
        
      // Act
      const service = new MotorcycleService();
      const result = await service.destroy('637bf15706eb45228312c8c3');
        
      // Assert
      expect(result).to.be.deep.equal(null);
    });
  });
});