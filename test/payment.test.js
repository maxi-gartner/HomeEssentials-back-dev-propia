import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("Test on /payment path", () => {
    let server = null;
    let api = null;

    before(async () => {
        server = await app.listen(8000);
        api = request(app);
    });

    it("Sucess creating donations", async () => {
        const donation = {
            unit_price: 1000,
        };

        const response = await api
            .post("/payment")
            .send(donation);

            expect(response.body).to.have.property("preferenceId");
        expect(response.status).to.equal(201);
    });

    after(async () => {
        await server.close();
    });
});