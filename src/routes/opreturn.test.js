import supertest from 'supertest';
import server from '../server';

jest.mock('../services/opreturn');

const { getOpReturn } = require('../services/opreturn');

afterAll(async () => {
    server.close();
});

const request = supertest(server);

const opReturnData = '6a24aa21a9ede2f61c3f71d1defd3fa999dfa369537799962b48bebd836974e8cf9';

describe(`GET /opreturn/${opReturnData}`, () => {
    test('should successfully return the associated transaction hashes and block hashes for matching transaction', async () => {
        getOpReturn.mockImplementationOnce(() =>
            Promise.resolve({
                blockhash: "000000000003777f4521cf755b2bf91a81aa4e3783de362c3e1f5e126bef58d5",
                txhash: "3a0c011199649e0e2b55ea0ac0ab03a654a98960fe7176bdf6ce219e7f100a92"
            })
        );

        await expect(
            request
                .get(`/opreturn/${opReturnData}`)
                .set('Accept', 'application/json'),
        ).resolves.toHaveProperty('status', 200);
    })
});
