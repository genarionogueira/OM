import request from 'supertest';
import { AMENITIES } from './data';
const url = 'http://localhost:4010';

describe('Server End-to-End Test', () => {


  const UPSERT_AMENITY = `
    mutation Mutation($inputs: [AmenityInput]) {
      upsertAmenity(inputs: $inputs) {
        success
        message
        amenities {
          id
          name
          description
        }
      }
    }
  `;

  const DELETE_AMENITY = `
    mutation DeleteAmenity($deleteAmenityId: ID!) {
      deleteAmenity(id: $deleteAmenityId) {
        success
        message
        amenity {
          id
          name
          description
        }
      }
    }
  `;

  const QUERY_AMENITIES = `
    query ExampleQuery {
      amenities {
        id
        name    
        description
      }
    }
  `
  // delete all amenities
  it.skip('delete all amenities', async () => {
    const response = await request(url).post('/')
      .send({
        query: `
          query {
            amenities {
              id
            }
          }
        `,
      });
    const amenities = response.body.data.amenities;
    const ids = amenities.map((amenity: any) => amenity.id);
    ids.forEach(async (id: string) => {
      await request(url).post('/')
        .send({
          query: DELETE_AMENITY,
          variables: {
            deleteAmenityId: id,
          },
        });
    });
  });

  // test to add all amenities from the amenities list
  it('add all amenities', async () => {
    const response = await request(url).post('/')
      .send({
        query: UPSERT_AMENITY,
        variables: {
          inputs: AMENITIES,
        },
      });
    expect(response.status).toBe(200);
    });

  // test to change the description of the first amenity
  it('update first amenity', async () => {
    const response = await request(url).post('/')
      .send({
        query: UPSERT_AMENITY,
        variables: {
          inputs: [{
            id: '1',
            name: 'Wifi',
            description: 'High speed internet access, now with free VPN'
          }],
        },
      });
    expect(response.status).toBe(200);
  });

  // test to delete the first amenity
  it('delete first amenity', async () => {
    const response = await request(url).post('/')
      .send({
        query: DELETE_AMENITY,
        variables: {
          deleteAmenityId: '1',
        },
      });
    expect(response.status).toBe(200);
  });

});
