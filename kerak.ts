/* ============================
   ORDER PAGE MAIN LAYOUT
============================ */
.order-page {
  width: 100%;
  padding: 40px 0;
  background: #f8f8f8;
}

.order-container {
  display: flex;
  gap: 30px;
}

/* LEFT SIDE */
.order-left {
  flex: 2;
}

/* RIGHT SIDE */
.order-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* ============================
   NAVIGATION (TABS)
============================ */
.order-nav-frame {
  margin-bottom: 20px;
}

.table_list .MuiTab-root {
  font-weight: 600;
  font-size: 15px;
}

.table_list .MuiTabs-indicator {
  height: 3px;
  background-color: #1976d2;
}

/* ============================
   ORDERS LIST
============================ */
.order-main-context {
  width: 100%;
}

.order-main-box {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

/* Scroll area */
.order-box-scroll {
  max-height: 250px;
  overflow-y: auto;
  padding-right: 5px;
}

/* Dish item */
.orders-name-price {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.orders-name-price:last-child {
  border-bottom: none;
}

.order-dish-img {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 15px;
}

.title-dish {
  font-size: 16px;
  font-weight: 600;
  width: 120px;
}

/* Price line */
.price-box {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}

.price-box img {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}

/* ============================
   TOTAL PRICE BOX
============================ */
.total-price-box {
  margin-top: 20px;
  background: #fafafa;
  padding: 15px;
  border-radius: 12px;
}

.box-total {
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  gap: 15px;
  font-size: 15px;
}

.total-price-box p {
  margin: 0;
  font-weight: 500;
}

.verify-button,
.cancel-button,
.pay-button {
  margin-top: 18px;
  width: 100%;
  font-weight: 600;
}

/* ============================
   RIGHT SIDE — USER INFO
============================ */

.oreder-info-box {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.member-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order-user-img {
  position: relative;
}

.order-user-avatar {
  width: 90px;
  height: 90px;
}

.order-user-icon-box {
  position: absolute;
  bottom: 0;
  right: 0;
}

.order-user-prof-img {
  width: 28px;
}

.order-user-name {
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
}

.order-user-prof {
  opacity: 0.7;
  font-size: 14px;
}

.liner {
  width: 100%;
  height: 1px;
  background: #ddd;
  margin: 20px 0;
}

.order-user-address {
  font-size: 15px;
  display: flex;
  align-items: center;
}

/* ============================
   PAYMENT BOX
============================ */
.payment-info-box {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.payment-input {
  margin-bottom: 15px;
}

.payment-input-field,
.payment-input-half {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 15px;
  background: #fafafa;
}

.payment-input-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.payment-methods {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;
}

.payment-method-icon {
  width: 50px;
  opacity: 0.9;
}

/* ============================
   RESPONSIVE
============================ */
@media (max-width: 992px) {
  .order-container {
    flex-direction: column;
  }
}
