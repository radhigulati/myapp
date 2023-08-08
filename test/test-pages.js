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
    describe ('Competitive page', function() {
        it('status', function(done){
            request('http://localhost:8080/competitive', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Cat page', function() {
        it('status', function(done){
            request('http://localhost:8080/cat', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Dog page', function() {
        it('status', function(done){
            request('http://localhost:8080/dog', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Random page', function() {
        it('status', function(done){
            request('http://localhost:8080/random', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('CCI page', function() {
        it('status', function(done){
            request('http://localhost:8080/CCI', function(error, response, body) {
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
    describe ('Org page', function() {
        it('status', function(done){
            request('http://localhost:8080/org', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Sofa page', function() {
        it('status', function(done){
            request('http://localhost:8080/sofa', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
    describe ('Couch page', function() {
        it('status', function(done){
            request('http://localhost:8080/couch', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});