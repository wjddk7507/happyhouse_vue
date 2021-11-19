<template>
  <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">내 정보</h4>
        <p class="category">your profile</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field :class="messageClass">
              <label>아이디</label>
              <md-input v-model="id" type="text"></md-input>
      <span class="md-error">There is an error</span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50"></div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>비밀번호</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>비밀번호 재확인</label>
              <md-input v-model="spassword" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>이름</label>
              <md-input v-model="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50"></div>

          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>생년</label>
              <md-input v-model="year" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>월</label>
              <md-input v-model="month" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>일</label>
              <md-input v-model="day" type="text"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>본인확인 이메일</label>
              <md-input v-model="emailadress" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50"></div>

          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>휴대전화</label>
              <md-input v-model="phone" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Join</md-button>
          </div>
    <md-switch v-model="hasMessages">{{ !hasMessages ? 'Show' : 'Hide' }} Errors</md-switch>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default {
  name: "MemberJoin",
  data() {
    return {
      id: "",
      password: "",
      spassword: "",
      username: "",
      year: "",
      month: "",
      day: "",
      emailadress: "",
      phone: "",
      hasMessages: false,
    };
  },
  computed: {
    messageClass() {
      return {
        "md-invalid": this.hasMessages,
      };
    },
  },
};
</script>

<style></style>
