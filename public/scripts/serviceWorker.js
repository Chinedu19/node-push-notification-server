self.addEventListener("push", (event) => {
  if (event.data) {
    console.log("This push event has data: ", event.data.text());
    const notif = self.registration.showNotification("A demo notification", {
      body: event.data.text(),
    });
    event.waitUntile(notif);
    console.log("notification should be sent");
  } else {
    console.log("This push event has no data.");
  }
});
