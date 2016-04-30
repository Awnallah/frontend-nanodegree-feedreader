/*
Test suits completed by: Hamzah Awnallah
feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.*/

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('allFeeds has links', function() {
            allFeeds.forEach(function(obj) {
                expect(obj.url).toBeDefined();
                expect(obj.url).not.toBe(null);
                expect(obj.url).not.toBe('');
            });

        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('allFeeds has names', function() {
            allFeeds.forEach(function(obj) {
                expect(obj.url).toBeDefined();
                expect(obj.url).not.toBe(null);
                expect(obj.url).not.toBe('');
            });

        });


    });


    /* New test suite named "The menu" */

    describe('The menu', function() {
        var body = $('body');
        var menuIcon = $('.menu-icon-link');

        /* This test ensures the menu element is
         * hidden by default
         */
        it('has a hidden menu by default', function() {

            expect(body.hasClass('menu-hidden')).toBe(true);
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked
          */
         it('menu changes visibility when clicked', function() {


            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

     });


    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('pupulates .feed container after loadFeed loads', function(done) {

            expect($('.feed').find('.entry').length >= 1 ).toBe(true);
            done();

        });

    });

    /* New test suit named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var current,
            newFeed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                currentFeed = $('.feed').find('.entry').text();
                currentTitle = $('.header-title').text();

                loadFeed(0, function() {
                    newFeed = $('.feed').find('.entry').text();
                    newTitle = $('.header-title').text();
                    done();

                });

            });

        });




        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content changes.
         */

        it('The content changes in view when loadFeed loads', function(done) {

            expect(currentFeed != newFeed).toBe(true);
            expect(currentTitle != newTitle).toBe(true);
            done();

        });

    });


}());
