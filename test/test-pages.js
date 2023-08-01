var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:8080/' , function(error, response, body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:8080/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Docs page', function() {
        it('status', function(done){
            request('http://localhost:8080/docs', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Product page', function() {
        it('status', function(done){
            request('http://localhost:8080/product', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Why now page', function() {
        it('status', function(done){
            request('http://localhost:8080/now', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Careers page', function() {
        it('status', function(done){
            request('http://localhost:8080/careers', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});